<template>
  <el-upload
    class="avatar-uploader"
    action="#"
    list-type="picture-card"
    :auto-upload="false"
    @change="handleFileChange"
    accept="image/png, image/jpeg"
    :on-remove="onRemove"
    :class="{ hideUpload: !!props.url }"
    :limit="1"
    ref="uploadImg"
  >
    <el-icon class="avatar-uploader-icon"><Plus /></el-icon>
  </el-upload>
</template>

<script setup>
import { Plus } from "@element-plus/icons-vue";
import { defineProps, ref, watch } from "vue";

const props = defineProps({
  url: String,
});

const uploadImg = ref();

watch(
  () => props.url,
  (newValue) => {
    if (!newValue) {
      uploadImg.value.clearFiles();
    }
  }
);

const emit = defineEmits(["change-image", "remove-image"]);

const onRemove = () => {
  emit("remove-image");
};
const handleFileChange = (file) => {
  if (file && file.raw) {
    const reader = new FileReader();
    reader.readAsDataURL(file.raw);
    reader.onload = () => {
      emit("change-image", reader.result);
    };
  }
};
</script>

<style>
.hideUpload {
  .el-upload--picture-card {
    display: none;
  }
  .el-upload-list__item is-ready {
    display: none;
  }
}
</style>
