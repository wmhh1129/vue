<template>
  <div class="table">
    <!--表格-->
    <el-table border stripe id="iTable" :data="list">
      <!--数据列-->
      <el-table-column v-for="(column, index) in columns" :prop="column.prop" :key="index" :label="column.label">
        <!--<template slot-scope="scope">-->
        <!--<template v-if="column.formatter">-->
        <!--<span v-html="column.formatter(scope.row)"></span>-->
        <!--</template>-->
        <!--<template v-else><span>{{scope.row[column.prop]}}</span></template>-->
        <!--</template>-->
      </el-table-column>
      <!--按钮操作组-->
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-dropdown trigger="click" @command="handleCommand">
            <el-button type="primary" size="mini">
              操作<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu v-if="scope.row.type" slot="dropdown">
              <el-dropdown-item v-for="(btn,key) in scope.row.type" :key="key" :command="[btn.label,scope.row]">
                {{btn.label}}
              </el-dropdown-item>
            </el-dropdown-menu>
            <el-dropdown-menu v-else slot="dropdown">
              <el-dropdown-item v-for="(btn,key) in operates" :key="key" :command="[btn.label,scope.row]">
                {{btn.label}}
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
    <!--分页-->
    <div class="block">
      <el-pagination @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page="page.PageIndex"
                     :page-sizes="[2, 4, 6, 8, 10]"
                     :page-size="page.PageSize"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="totalCount">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Table-page',
    props: {
      list: {
        type: Array
      },
      page: {
        type: Object,
        default: null
      },
      columns: {
        type: Array
      },
      operates: {
        type: Array
      },
      totalCount: {
        type: Number,
        default: 0
      }
    },
    methods: {
      // 切换每页显示的数量
      handleSizeChange(size) {
        this.$emit('handleSizeChange', size)
        this.pageIndex = 1
      },
      // 切换页码
      handleCurrentChange(index) {
        this.$emit('handleCurrentChange', index)
        this.pageIndex = index
      },
      // 操作
      handleCommand(command) {
        this.$emit('handleCommand', command)
      }
    }
  }
</script>

<style scoped>

</style>
