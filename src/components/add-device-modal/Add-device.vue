<template>
  <div>
    <el-tabs class="add-device-tabs" v-model="activeTab" @tab-click="handleClick">
      <el-tab-pane label="单个添加" name="singleAdd">
        <el-form :label-position="'right'" label-width="80px" :model="formModel">
          <el-form-item label="IMEI" required>
            <el-input v-model="formModel.imei"></el-input>
          </el-form-item>
          <el-form-item label="激活码" required>
            <el-input v-model="formModel.activation_code"></el-input>
          </el-form-item>
          <el-form-item label="应用">
            <el-select v-model="formModel.app" placeholder="活动区域">
              <el-option label="应用一" value="shanghai"></el-option>
              <el-option label="应用二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button plain @click="cancel">取消</el-button>
            <el-button type="primary" @click="submit">添加</el-button>
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
    data() {
      return {
        activeTab: 'singleAdd',
        formModel: {
          imei: '',
          activation_code: '',
          app: ''
        }
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event)
      },
      cancel() {
      },
      submit() {
      }
    }
  }
</script>

<style scoped>

</style>
