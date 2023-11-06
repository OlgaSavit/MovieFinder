<template>
  <el-form
    class="createMovieForm"
    :label-position="'left'"
    label-width="80px"
    style="max-width: 460px"
    ref="ruleFormRef"
    :model="formData"
    status-icon
    :rules="rules"
  >
    <div class="flexRow">
      <el-form-item prop="title" label="Title">
        <el-input v-model="formData.title" />
      </el-form-item>
    </div>
    <div class="flexRow">
      <el-form-item prop="director" label="Director">
        <el-input v-model="formData.director" />
      </el-form-item>
    </div>
    <div class="flexRow">
      <el-form-item prop="year" label="Year">
        <el-date-picker
          class="yearInput"
          v-model="formData.year"
          type="year"
          placeholder="Pick a year"
        />
      </el-form-item>
    </div>
    <div class="flexRow">
      <el-form-item v-model="formData.poster" prop="poster" label="Poster">
        <UploadImage
          :url="formData.poster"
          @change-image="onSelectFile"
          @remove-image="onRemoveImage"
        />
      </el-form-item>
    </div>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"
        >Submit</el-button
      >
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>
<script setup>
import { reactive, ref } from "vue";
import UploadImage from "@/components/UploadImage.vue";
import { useSearchStore } from "@/store/SearchStore";
import { uuid } from "vue-uuid";
const searchStore = useSearchStore();
const ruleFormRef = ref();
const checkYear = (rule, value, callback) => {
  if (!value) {
    return callback(new Error("Please input the year"));
  } else {
    callback();
  }
};
const isRequired = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("Please input the value"));
  } else {
    callback();
  }
};
const isRequiredPoster = (rule, value, callback) => {
  if (formData.poster === "") {
    callback(new Error("Please select the poster"));
  } else {
    callback();
  }
};

const formData = reactive({
  title: "",
  director: "",
  year: "",
  poster: "",
});

const rules = reactive({
  title: [{ validator: isRequired, trigger: "blur" }],
  director: [{ validator: isRequired, trigger: "blur" }],
  year: [{ validator: checkYear, trigger: "blur" }],
  poster: [{ validator: isRequiredPoster, trigger: "blur" }],
});
const onSelectFile = (url) => {
  formData.poster = url;
};
const onRemoveImage = () => {
  formData.poster = "";
};
const submitForm = (formEl) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      searchStore.addNewMovie({
        imdbID: uuid.v1(),
        Title: formData.title,
        Year: new Date(formData.year).getFullYear(),
        Director: formData.director,
        Poster: formData.poster,
      });
      ruleFormRef.value.resetFields();
    } else {
      return false;
    }
  });
};
const resetForm = (formEl) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<style>
.createMovieForm {
  margin: auto;
  .yearInput {
    width: 100% !important;
  }
  .el-form-item__label {
    font-weight: 600;
  }
  .el-icon--zoom-in {
    display: none;
  }
  .flexRow {
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    button {
      margin: 0;
    }
  }
}
</style>
