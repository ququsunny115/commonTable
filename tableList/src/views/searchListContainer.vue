<template>
  <div>
    <search :formOption="formOption" ref="form"></search>
    <div class="table-container">
        <el-table :data="tableListData.tableData" border :highlight-current-row="tableListData.selectType === 'index'" :height="tableHeight">
            <el-table-column type="selection" width="55" v-if="tableListData.selectType === 'selection'"></el-table-column>
            <el-table-column type="index" width="50" v-if="tableListData.selectType === 'index'" align="center"></el-table-column>
            <el-table-column v-for="title in tableListData.tableColumns"
                             :key="title.prop"
                             :prop="title.prop"
                             :label="title.label"
                             :align="title.type"
                             :width="title.width">
            </el-table-column>
          </el-table>
    </div>
    <div class="footer-container" ref="pagination">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="tableListData.pagination.currentPage"
          :page-sizes="tableListData.pagination.pageSizes"
          :page-size="tableListData.pagination.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableListData.pagination.total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import search from './searchContainer'
export default{
  components: {
    search
  },
  props: {
    formOption: {
      type: Object,
      requred: true
    },
    tableListData: {
      type: Object,
      requred: true
    }
  },
  data () {
    return {
      tableHeight: 450
    }
  },
  mounted () {
    this.getTableHeight()
  },
  methods: {
    getTableHeight () {
      this.$nextTick(() => {
        this.tableHeight = document.documentElement.clientHeight - this.$refs.form.$el.offsetHeight - this.$refs.pagination.offsetHeight - 50
      })
    },
    handleSizeChange (val) {
      this.$emit(this.tableListData.pagination.sizeChange, val)
    },
    handleCurrentChange (val) {
      this.$emit(this.tableListData.pagination.currentChange, val)
    }
  }
}
</script>

<style scoped>
.table-container .ivu-table-wrapper{
  height: 450px;
}
.table-container .ivu-table-wrapper .ivu-table{
  overflow-y: auto !important;
}
</style>
