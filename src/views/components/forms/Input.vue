<template>
  <div class="input" :class="setClass">
    <span class="label" v-if="!!label"
          :class="floatingClass">{{ label }}   </span>

    <textarea v-if="isTextarea"
              @keyup="handleKeyup"
              :value="modelValue"
              :disabled="disabled"
              v-bind="attrs"
              @focus="isFocused = true"
              @blur="isFocused = false"
              @input="$emit('update:modelValue', $event.target.value)"
              :placeholder="placeholderText"></textarea>


    <input v-else-if="isInput"
           :value="modelValue"
           :disabled="disabled"
           @keyup="handleKeyup"
           v-bind="attrs"
           @focus="isFocused = true"
           @blur="isFocused = false"
           @input="$emit('update:modelValue', $event.target.value)"
           :type="getType"
           :placeholder="placeholderText">

    <div v-if="!!icony" class="icon">
      <i class="icony" :class="icony"></i>
    </div>

    <md-icon v-if="!!icon" class="icon" :icon="icon"/>

    <div v-if="!!imgIcon" class="icon imgIcon">
      <img :src="imgIcon">
    </div>

    <VueMultiselect v-else-if="isSelect"
                    :options="selectOpts.items"
                    v-bind="attrs"
                    :disabled="disabled"
                    :searchable="selectOpts.searchable"
                    :close-on-select="selectOpts.closeOnSelect"
                    :allow-empty="selectOpts.allowEmpty"
                    v-model="select"
                    @input="handleInput"
                    :draggable="false"
                    :selected-label="'انتخاب شده'"
                    :select-label="''"
                    :deselect-label="''"
                    :track-by="selectOpts.key"
                    :label="selectOpts.label"
                    :placeholder="selectOpts.placeholder">
      <template #noResult>
        چیزی پیدا نشد
      </template>
    </VueMultiselect>

    <div v-else-if="isDate">

      <input
          @click="isOpenDrawerDatepicker = true"
          type="text"
          :id="'date_'+ keyId"
          :placeholder="placeholderText"
      />
      <date-picker
          color="#0560FD"
          :show="isOpenDrawerDatepicker"
          :placeholder="placeholderText"
          format="YYYY/MM/DD"
          display-format="dddd jDD jMMMM jYYYY"
          :editable="false"
          :disabled="disabled"
          :max="getMaxDate"
          :min="getMinDate"
            auto-submit
          :autoSubmit="true"
          v-model="date"
          :custom-input="'#date_'+ keyId"
      />

    </div>

    <div v-if="!!message"
         class="input__message" :class="messageType">{{ message }}
    </div>

  </div>
</template>
<script>

import {_formatPrice} from "@/composables/utilities";
import VueMultiselect from 'vue-multiselect';
import jalaliMoment from 'jalali-moment';
import DatePicker from 'vue3-persian-datetime-picker';

export default {
  components: {VueMultiselect, DatePicker},
  props: {
    attrs: {
      type: Object,
      default: {},
    },
    modelValue: {},
    message: {
      type: String,
      default: ''
    },
    messageType: {
      type: String,
      default: 'error'
    },
    cols: {
      type: String,
      default: "col-md-3"
    },
    outline: {
      type: Boolean,
      default: false
    },
    float: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: "right"
    },
    alignIcon: {
      type: String,
      default: "left"
    },
    padding: {
      type: String,
      default: ""
    },
    icony: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    imgIcon: {
      type: String,
      default: ""
    },
    gap: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "input"
    },
    placeholder: {
      type: String,
      default: ""
    },
    selectOptions: {
      type: Object
    },
    action: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    classList: {
      type: Array,
      default: []
    },
    value: {
      type: String
    },
    maxDate: {
      type: String,//persian date
      default: null
    },
    minDate: {
      type: String,//persian date
      default: null
    },
    keyId: {
      type: String,
      default: null
    },
    direction: {
      type: String,
      default: null
    }
  },
  computed: {
    isTextarea() {
      return this.inputType[0] === "textarea";
    },
    isInput() {
      return this.inputType[0] === "input";
    },
    isSelect() {
      return this.inputType[0] === "select";
    },
    isDate() {
      return this.inputType[0] === "date";
    },
    selectOpts() {
      return Object.assign(this.selectDefault, this.selectOptions);
    },
    placeholderText() {
      if (this.float) return '';
      return !!this.placeholder ? this.placeholder : this.label;
    },
    inputType() {
      return this.type.split(":");
    },
    floatingClass() {
      if (!this.float) return '';
      return (this.isFocused || this.modelValue) ? 'floating-focus' : 'floating-blur';
    },
    offset: {
      get() {
        if (!this.gap) return "";
        return "offset-md-" + this.gap;
      }
    },
    getType: {
      get() {
        let type = "text";
        switch (this.inputType[1]) {
          case "password":
            type = "password";
            break;
          case "email":
            type = "email";
            break;
          case "number":
            type = "number";
            break;
          default:
            type = "text";
            break;
        }
        if (type === "password" && this.showPassword) type = "text";

        return type;
      },
      set(val) {
        this.inputType[1] = val;
      }
    },
    exactType: {
      get() {
        return !!this.inputType[1] ? this.inputType[1] : "";
      }
    },
    setClass: {
      get() {
        let classes = this.classList.length > 0 ? this.classList.join(" ") : " input";
        let link = this.exactType === "link" ? " link " : "";
        let outline = !!this.outline ? ' input-outline ' : '';
        let topForLabel = !!this.label ? ' topForLabel ' : '';
        let align = !!this.align ? ' input-' + this.align : '';
        let float = !!this.float ? ' floating ' + ((this.isFocused || this.modelValue) ? 'focus' : 'blur') : '';
        let alignIcon = !!this.alignIcon && this.alignIcon === 'right' ? ' icon-pre' : ' icon-post';
        let type = !!this.messageType && !!this.message ? ' input__' + this.messageType : '';
        let direction = !!this.direction && !!this.direction ? ' input__' + this.direction : '';

        return this.padding + float + link + alignIcon + topForLabel + outline + classes + align + type + direction + " col-md-" + this.cols + " " + this.offset;
      }
    },
    getMaxDate() {
      if (!this.maxDate) return null;

      let date;
      if (this.maxDate === 'today') {
        date = jalaliMoment();
      } else if (this.maxDate.startsWith('year:')) {
        const years = parseInt(this.maxDate.split(':')[1]);
        date = jalaliMoment().subtract(years, 'jYear');
      } else {
        return null;
      }

      return date.format('YYYY/MM/DD');
    },
    getMinDate() {
      if (!this.minDate) return null;
      return jalaliMoment(this.minDate, 'YYYY/MM/DD').format('YYYY/MM/DD');
    },
  },
  data() {
    return {
      isOpenDrawerDatepicker: false,
      isFocused: false,
      selectDefault: {
        items: [],
        allowEmpty: true,
        searchable: false,
        placeholder: "یک " + this.label + " را انتخاب کنید",
        searchPlaceholder: "جست و جو...",
        closeOnSelect: true,
        direction: "bottom",
        loading: true,
        label: null,
        value: null,
      },
      select: [],
      date: null,
      iniDate: false,// Flag to track whether date property has been initialized
    };
  },
  watch: {
    modelValue(val) {
      if (this.isSelect) this.select = val;

      if (this.isDate && !this.iniDate) {
        this.date = val;
        this.iniDate = true;
      }
    },
    select(val) {
      this.handleInput(val);
    },
    date(val) {
      this.handleInput(val);
    }
  },
  mounted() {

  },
  methods: {
    handleInput(value) {
      this.$emit("update:modelValue", value);
    },
    handleKeyup() {
      if (this.exactType === "price") {
        let price = _formatPrice(this.modelValue);
        this.handleInput(price);
      } else if (this.exactType === "percent") {
        let percent = parseInt(this.modelValue) || '';
        if (percent >= 100) {
          this.handleInput(100);
        } else if (percent <= 0) {
          this.handleInput('');
        } else {
          this.handleInput(percent);
        }
      }
    },
  },

};
</script>
