<template>
  <div>
      <tableList :tableListData="tableListData" @handleSizeChange="handleSizeChange" @handleCurrentChange="handleCurrentChange"></tableList>
  </div>
</template>

<script>
import tableList from './listContainer'
export default{
  components: {
    tableList
  },
  data () {
    return {
      tableListData: {
        height: 450,
        selectType: '', // 单选或复选：单选为index，复选为selection
        tableColumns: [
          {
            prop: 'date',
            label: '日期',
            width: '',
            type: 'center'
          },
          {
            prop: 'name',
            label: '姓名',
            width: '',
            type: 'center'
          },
          {
            prop: 'address',
            label: '地址',
            width: '',
            type: 'center'
          }
        ],
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ],
        pagination: {
          sizeChange: 'handleSizeChange',
          currentChange: 'handleCurrentChange',
          total: 100,
          pageSizes: [15, 30, 60, 100],
          pageSize: 15,
          currentPage: 1
        }
      }
    }
  },
  created () {
    this.$nextTick(() => {
      this.tableListData.height = document.documentElement.clientHeight - 100
    })
  },
  methods: {
    handleSizeChange (val) {
      console.log(val)
    },
    handleCurrentChange (val) {
      console.log(val)
    }
  }
}
</script>

<style scoped>
.table-container .ivu-table-wrapper{
  height: 530px;
  overflow-y: auto;
}
</style>
