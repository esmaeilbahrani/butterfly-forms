<template>
  <div class="OTP">
    <v-otp-input
        ref="otpInput"
        input-classes="OTP__input"
        separator=""
        inputType="letter-numeric"
        :num-inputs="5"
        v-model="bindModal"
        :should-auto-focus="true"
        :should-focus-order="true"
        @on-change="handleOnChange"
        @on-complete="handleOnComplete"
        :placeholder="['', '', '', '', '']"
    />
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import VOtpInput from "vue3-otp-input";

const emits = defineEmits(['onComplete', 'onChanged']);

const otpInput = ref<InstanceType<typeof VOtpInput> | null>(null);
const bindModal = ref("");

const handleOnComplete = (value: string) => {
  emits('onComplete', value);
};

const handleOnChange = (value: string) => {
  emits('onChanged', value);
};

</script>