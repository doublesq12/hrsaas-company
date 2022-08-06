<!-- 弹出框组件 -->
<template>
  <div>
    <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      width="40%"
    ><slot /></el-dialog>
  </div>
</template>

<script>

export default {
  components: {},
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      dialogVisible: false
    }
  },
  computed: {},
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

  },
  methods: {

  }
}
</script>
<style scoped>

</style>
