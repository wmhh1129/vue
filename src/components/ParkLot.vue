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
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--<div v-else>111</div>-->
  </div>
</template>

<script>
  import axios from 'axios'

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
        axios.get('http://mock-server.dbjtech.com/mock/5b332ff0eef1ee23a0fc8471/v0/parking/parking_lot_list')
          .then(res => {
            console.log(this)
            this.tableData = res.data.data
          })
          .catch(err => console.log(err))
      }
    }
  }
</script>

<style scoped>
</style>
