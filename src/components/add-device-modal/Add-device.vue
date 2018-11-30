<template>
  <div>
    <el-tabs class="add-device-tabs" v-model="activeTab" @tab-click="handleClick">
      <el-tab-pane label="单个添加" name="singleAdd">
        <el-form :label-position="right" label-width="80px" :model="formLabelAlign">
          <el-form-item label="IMEI" required>
            <el-input v-model="formLabelAlign.imei"></el-input>
          </el-form-item>
          <el-form-item label="激活码" required>
            <el-input v-model="formLabelAlign.activation_code"></el-input>
          </el-form-item>
          <el-form-item label="应用">
            <el-input v-model="formLabelAlign.app"></el-input>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="批量添加" name="batchAdd">
        批量添加设备
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    name: 'AddDeviceModal',
    data () {
      return {
        activeTab: 'singleAdd',
        formLabelAlign: {
          imei: '',
          activation_code: '',
          app: ''
        }
      }
    },
    methods: {
      handleClick (tab, event) {
        console.log(tab, event)
      }
    }
  }
</script>

<style scoped>

</style>
