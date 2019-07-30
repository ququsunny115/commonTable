<template>
  <div>
    <div class="filter-container" :label-width="80">
      <Input placeholder="姓名" class="filter-item" />
      <Select  class="filter-item">
        <Option value="" key="">全部</Option>
      </Select>
      <DatePicker type="date" class="filter-item"></DatePicker>
      <DatePicker type="datetime" class="filter-item"></DatePicker>
      <DatePicker type="datetime" format="yyyy-MM-dd HH:mm" class="filter-item"></DatePicker>
      <DatePicker type="daterange" class="filter-item"></DatePicker>
      <DatePicker type="datetimerange" style="width: 300px;"></DatePicker>
      <Button type="primary">搜索</Button>
    </div>
    <div class="table-container">
        <Table border :columns="tableColumns" :data="tableList"></Table>
    </div>
    <div class="footer-container">
        <Page :total="100" show-total show-elevator show-sizer></Page>
    </div>
  </div>
</template>

<script>
export default{
  data () {
    return {
      tableColumns: [
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '年龄',
          key: 'age'
        },
        {
          title: '地址',
          key: 'address'
        },
        {
          title: '省份',
          key: 'province'
        },
        {
          title: '城市',
          key: 'city'
        },
        {
          title: '邮编',
          key: 'zip'
        },
        {
          title: '操作',
          key: 'action',
          fixed: 'right',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  margin: '0 5px'
                }
              }, '查看'),
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  margin: '0 5px'
                }
              }, '编辑')
            ])
          }
        }
      ],
      tableList: [
        {
          name: 'qq',
          age: 22,
          address: '陕西现碑林区',
          province: '陕西',
          city: '西安',
          zip: 710000
        }
      ]
    }
  },
  created () {
    const flag = true
    if (flag) {
      this.tableColumns.pop()
    }
  },
  methods: {}
}
</script>

<style scoped>
.table-container .ivu-table-wrapper{
  height: 530px;
  overflow-y: auto;
}
</style>
