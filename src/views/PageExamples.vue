<template>
  <div class="pageExamples">
    <h1>Butterfly forms</h1>

    <section>
      <article>
        <div class="row">
          <Input
              type="input:text"
              outline
              float
              cols="6"
              label="نام و نام خانوادگی"
          />
          <Input
              type="input:text"
              outline
              float
              cols="6"
              label="شهر"
              placeholder="شهر را بنویسید"/>
        </div>

        <div class="row">
          <Input
              type="input:number"
              outline
              align="center"
              direction="ltr"
              cols="4"
              label="شماره موبایل"/>
          <Input
              type="input:number"
              outline
              align="center"
              direction="ltr"
              cols="4"
              label="کد ملی"/>
          <Input
              type="select"
              outline
              :select-options="{
                  key: 'key',
                  label: 'name',
                  placeholder:'جنسیت',
                  items: [{key:'male',name:'آقا'},{key:'female',name:'خانم'}]
              }"
              cols="4"
              label="جنسیت"/>
        </div>
        <div class="row">
          <Input
              type="date"
              outline
              key-id="1"
              max-date="today"
              cols="6"
              label="تاریخ"/>

          <Input
              type="date"
              key-id="2"
              outline
              max-date="year:18"
              cols="6"
              label="تاریخ تولد"/>
        </div>
        <div class="row">
          <Input
              type="textarea"
              outline
              cols="12"
              label="آدرس"/>
        </div>

      </article>
    </section>

  </div>
</template>
<script setup>
import Input from "@/views/components/forms/Input.vue";
</script>