<template>
 <div class="filter-container">
  <Row>
    <Col :xs="20" :md="12" :lg="8" v-for="item in formData" :key="item.type">
      <span>{{ item.label }}：</span>
      <Input :placeholder="'请输入'+item.label" class="filter-item" v-if="item.type === 'input'" />
      <Select  class="filter-item" v-if="item.type === 'select'">
        <Option v-for="option in item.option" :key="option.value" :value="option.value">{{ option.name }}</Option>
      </Select>
      <DatePicker type="date" class="filter-item" v-if="item.type === 'date'"></DatePicker>
      <DatePicker type="datetime" class="filter-item" v-if="item.type === 'datetime'"></DatePicker>
      <DatePicker type="datetime" format="yyyy-MM-dd HH:mm" class="filter-item" v-if="item.type === 'datetimeFormat'"></DatePicker>
      <DatePicker type="daterange" class="filter-item" v-if="item.type === 'daterange'"></DatePicker>
      <DatePicker type="datetimerange"  class="filter-item" v-if="item.type === 'datetimerange'"></DatePicker>
    </Col>
    <Col :xs="20" :md="12" :lg="8" v-if="!isHide">
      <div class="button-container" style="margin-top: 10px">
        <Button v-for="button in buttonArray" :key="button.key" :type="button.type">{{ button.name }}</Button>
        <Button @click="dropdown" v-if="formOption.form.length > 3">展开<Icon type="md-arrow-dropdown" /></Button>
      </div>
    </Col>
  </Row>
  <div class="button-container" v-if="isHide">
    <Button v-for="button in buttonArray" :key="button.key" :type="button.type">{{ button.name }}</Button>
    <Button @click="dropup" v-if="formData.length > 3">收起<Icon type="md-arrow-dropup" /></Button>
  </div>
 </div>
</template>

<script>
export default{
  props: {
    formOption: {
      type: Object,
      required: true
      // default: () => {}
    }
  },
  data () {
    return {
      formData: [],
      isHide: false
    }
  },
  created () {
    this.formData = this.formOption.form
    this.buttonArray = this.formOption.button
    this.isHide = this.formOption.form.length >= 3
  },
  methods: {
    dropdown () {
      this.formData = this.formOption.form
      this.isHide = true
    },
    dropup () {
      this.formData = this.formData.slice(0, 2)
      this.isHide = false
    }
  }
}
</script>

<style scoped>
.filter-container span{
  display: inline-block;
  width: 100px;
  text-align: right;
}
.button-container{
  text-align: right;
  padding-right: 32px;
}
.button-container button{
  margin: 0 5px;
}
</style>
