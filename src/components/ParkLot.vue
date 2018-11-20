<template>
  <div class="list-wrapper">
    <header>
      <el-button type="success">新建停车场</el-button>
    </header>
    <div class="table-content" v-if="tableData.length > 0">
      <el-table
        border
        :data="tableData">
        <el-table-column
          prop="name"
          label="名字"
          width="180">
        </el-table-column>
        <el-table-column
          prop="area_num"
          label="区域数"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button type="text" >
              <router-link to="analysis-chart">查看</router-link>
            </el-button>
            <el-button type="text">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import axios from '../request/http'

  export default {
    name: 'ParkLot',
    data () {
      return {
        tableData: []
      }
    },
    created () {
      this.getList()
    },
    methods: {
      getList () {
        axios.get('parking/parking_lot_list')
          .then(res => {
            this.tableData = res.data.data
          })
          .catch(err => console.log(err))
      }
    }
  }
</script>

<style scoped>
</style>
