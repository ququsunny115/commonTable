<template>
  <div>
    <div class="table-container">
        <el-table :data="tableListData.tableData" :height="tableListData.height" border :highlight-current-row="tableListData.selectType === 'index'">
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
export default{
  props: {
    tableListData: {
      type: Object,
      required: true
    }
  },
  methods: {
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
</style>
