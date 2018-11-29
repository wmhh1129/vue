<template>
  <div class="list-wrapper">
    <header>
      <el-button type="success" @click="dialogVisible = true">新建停车场</el-button>
      <el-dialog
        :visible.sync="dialogVisible"
        width="30%">
        <subb :title="'标题'"></subb>
        <!--<span>这是一段信息</span>-->
        <!--<span slot="footer" class="dialog-footer">-->
            <!--<el-button @click="dialogVisible = false">取 消</el-button>-->
            <!--<el-button type="primary" @click="dialogVisible = false">确 定</el-button>-->
        <!--</span>-->
      </el-dialog>
    </header>
    <div class="table-content">
      <table-page :columns="columns"
                  :list="tableData"
                  :operates="operates"
                  :totalCount="totalCount"
                  :page="page"
                  @handleSizeChange="handleSizeChange"
                  @handleCurrentChange="handleCurrentChange"
                  :tabelLoading="tabelLoading"
                  @handleCommand="handleCommand"></table-page>
      <!--<el-table-->
      <!--border-->
      <!--:data="tableData">-->
      <!--<el-table-column-->
      <!--prop="name"-->
      <!--label="名字"-->
      <!--width="180">-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
      <!--prop="area_num"-->
      <!--label="区域数"-->
      <!--width="180">-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
      <!--prop="address"-->
      <!--label="地址">-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
      <!--fixed="right"-->
      <!--label="操作"-->
      <!--width="100">-->
      <!--<template slot-scope="scope">-->
      <!--<el-button type="text">-->
      <!--<router-link to="analysis-chart">查看</router-link>-->
      <!--</el-button>-->
      <!--<el-button type="text">编辑</el-button>-->
      <!--</template>-->
      <!--</el-table-column>-->
      <!--</el-table>-->
    </div>
  </div>
</template>

<script>
  // import axios from '../request/http'
  import { getParkLists } from '../common/core.api'
  import TablePage from './Table-page'
  import Subb from './Sub'

  export default {
    name: 'ParkLot',
    data () {
      return {
        tableData: [],
        tabelLoading: false,
        page: {
          PageSize: 10,
          PageIndex: 1,
          ConditionJson: {}
        },
        totalCount: 0,
        columns: [
          {
            prop: 'name',
            label: '停车场名'
            // formatter: (row) => {
            //   if (row.id === '10000') {
            //     return `<span>编号1</span>`
            //   } else {
            //     return row.id
            //   }
            // }
          },
          {
            prop: 'address',
            label: '地址'
            // formatter: (row) => {
            //   return `<span style="white-space: nowrap;color: dodgerblue;">${row.title}</span>`
            // }
          }
        ],
        operates: [
          {
            label: '编辑'
          },
          {
            label: '删除'
          }
        ],
        dialogVisible: false
      }
    },
    created () {
      this.getList()
    },
    computed: {
      count () {
        return this.$store.state.count
      }
    },
    components: {TablePage, Subb},
    methods: {
      getList () {
        getParkLists()
          .then(res => {
            this.tableData = res.data.data
            this.totalCount = this.tableData.length
          })
          .catch(err => console.log(err))
      },
      handleSizeChange (size) {
        this.limit = size
        console.log(' this.limit:', this.limit)
      },
      // 切换页码
      handleCurrentChange (index) {
        this.page = index
        console.log(' this.page:', this.page)
      },
      // 操作
      handleCommand (command) {
        console.log(command)
      }
    }
  }
</script>

<style scoped>
</style>
