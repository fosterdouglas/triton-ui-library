<docs>

<h3>Text Editor
<i title="Under construction!" class="p-1 fal fa-sm fa-exclamation-triangle text-info align-middle"></i>
</h3>
<p>
<span class="text-info">~In development, and needs confirmation on use case or a potential redesign~</span>
</p>

```js
<template>
  <b-container fluid>
      <quill class="quill col-8 pl-0 d-inline-block border-mediumdark" style="height:160px;" v-model="content" :config="config"></quill>
  </b-container>
</template>
<script>
export default {
    data() {
      return {
          config: {
              placeholder: 'Compose an epic...',
              options: 'code-block',
              modules: {
                toolbar: [['bold', 'italic', 'code-block'], [{ size: [ false, 'large' ] }]]
              }
          }
      }
  }
}
</script>
```

</docs>
