<docs>

<h3>Function - Standard</h3>
<p>The primary button for all of the applications functions. As an example, use this for uploading files, adding users, or assigning new packages. Any low-level functions that the user needs to do to utilize the platform's purpose.</p>

```js
<template>
  <div>

    <b-button
      :pressed="false"
      variant="outline-darkfade"
      class="btnFunction btnFunctionStandard"
      >
      {{ FuncButtonCaption }}
      <i></i>
    </b-button>

    <b-button
      :pressed="false"
      variant="outline-darkfade"
      class="btnFunction btnFunctionStandard"
      >
      <i class="fal fa-file-alt fa-lg btnIconLeft"></i>
      {{ FuncButtonCaption }}
    </b-button>

    <b-button
      :pressed="true"
      variant="outline-darkfade"
      class="btnFunction btnFunctionPressed"
      >
      {{ FuncButtonCaption }}
    </b-button>

    <b-button
      :pressed="true"
      variant="outline-darkfade"
      class="btnFunction btnFunctionPressed"
      >
      <span class="spinner-grow spinner-grow-sm btnIconLeft" role="status" aria-hidden="true"></span>
      {{ FuncButtonCaption }}
    </b-button>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        FuncButtonCaption: 'SAMPLE BUTTON'
      }
    }
  }
</script>
```

</docs>
