<template>
  <div>
    <search :formOption="formOption" ref="form"></search>
    <div class="table-container">
        <Table border :columns="tableColumns" :data="tableList" :height="tableHeight" ref="table"></Table>
    </div>
    <div class="footer-container" ref="pagination">
        <Page :total="100" show-total show-elevator show-sizer></Page>
    </div>
  </div>
</template>

<script>
import search from './searchContainer'
export default{
  components: {
    search
  },
  data () {
    return {
      formOption: {
        hasTable: true,
        form: [
          {
            type: 'input',
            label: '城市',
            key: 'city'
          },
          {
            type: 'select',
            label: '省份',
            key: 'province',
            option: [
              {
                name: '陕西',
                value: 'shannxi'
              }
            ]
          },
          {
            type: 'date',
            label: '日期1',
            key: 'date1'
          },
          {
            type: 'datetime',
            label: '日期2',
            key: 'date2'
          },
          {
            type: 'datetimeFormat',
            label: '日期3',
            key: 'date3'
          },
          {
            type: 'daterange',
            label: '日期范围1',
            key: 'daterange1'
          },
          {
            type: 'datetimerange',
            label: '日期范围2',
            key: 'daterange2'
          }
        ],
        button: [
          {
            name: '搜索',
            key: 'search',
            type: 'info'
          },
          {
            name: '新建',
            key: 'add',
            type: 'primary'
          },
          {
            name: '重置',
            key: 'reset',
            type: 'success'
          }
        ]
      },
      tableHeight: 450,
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
        }
        // {
        //   title: '操作',
        //   key: 'action',
        //   fixed: 'right',
        //   render: (h, params) => {
        //     return h('div', [
        //       h('Button', {
        //         props: {
        //           type: 'primary',
        //           size: 'small'
        //         },
        //         style: {
        //           margin: '0 5px'
        //         }
        //       }, '查看'),
        //       h('Button', {
        //         props: {
        //           type: 'primary',
        //           size: 'small'
        //         },
        //         style: {
        //           margin: '0 5px'
        //         }
        //       }, '编辑')
        //     ])
        //   }
        // }
      ],
      tableList: [
        {
          name: 'qq',
          age: 22,
          address: '陕西现碑林区',
          province: '陕西',
          city: '西安',
          zip: 710000
        },
        {
          name: 'qq',
          age: 22,
          address: '陕西现碑林区',
          province: '陕西',
          city: '西安',
          zip: 710000
        },
        {
          name: 'qq',
          age: 22,
          address: '陕西现碑林区',
          province: '陕西',
          city: '西安',
          zip: 710000
        },
        {
          name: 'qq',
          age: 22,
          address: '陕西现碑林区',
          province: '陕西',
          city: '西安',
          zip: 710000
        },
        {
          name: 'qq',
          age: 22,
          address: '陕西现碑林区',
          province: '陕西',
          city: '西安',
          zip: 710000
        },
        {
          name: 'qq',
          age: 22,
          address: '陕西现碑林区',
          province: '陕西',
          city: '西安',
          zip: 710000
        },
        {
          name: 'qq',
          age: 22,
          address: '陕西现碑林区',
          province: '陕西',
          city: '西安',
          zip: 710000
        },
        {
          name: 'qq',
          age: 22,
          address: '陕西现碑林区',
          province: '陕西',
          city: '西安',
          zip: 710000
        },
        {
          name: 'qq',
          age: 22,
          address: '陕西现碑林区',
          province: '陕西',
          city: '西安',
          zip: 710000
        },
        {
          name: 'qq',
          age: 22,
          address: '陕西现碑林区',
          province: '陕西',
          city: '西安',
          zip: 710000
        },
        {
          name: 'qq',
          age: 22,
          address: '陕西现碑林区',
          province: '陕西',
          city: '西安',
          zip: 710000
        },
        {
          name: 'qq',
          age: 22,
          address: '陕西现碑林区',
          province: '陕西',
          city: '西安',
          zip: 710000
        },
        {
          name: 'qq',
          age: 22,
          address: '陕西现碑林区',
          province: '陕西',
          city: '西安',
          zip: 710000
        },
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
  mounted () {
    this.getTableHeight()
  },
  methods: {
    getTableHeight () {
      this.$nextTick(() => {
        this.tableHeight = document.documentElement.clientHeight - this.$refs.form.$el.offsetHeight - this.$refs.pagination.offsetHeight - 50
      })
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
