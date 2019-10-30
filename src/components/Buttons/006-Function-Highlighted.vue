<docs>

<h3>Function - Highlighted</h3>
<p>This special variation of the function button is used for unique actions, or to stand out amongst a group of other function buttons.</p>

```js
<template>
  <div>

    <b-button
      :pressed="false"
      variant="outline-secondary"
      class="btnFunction btnFunctionHighlighted"
      onclick="this.blur();"
      >
      {{ FuncButtonCaption }}
      <i></i>
    </b-button>

    <b-button
      :pressed="false"
      variant="outline-secondary"
      class="btnFunction btnFunctionHighlighted"
      onclick="this.blur();"
      >
      <i class="fal fa-file-alt fa-lg btnIconLeft"></i>
      {{ FuncButtonCaption }}
    </b-button>

    <b-button
      :pressed="true"
      variant="outline-secondary"
      class="btnFunction btnFunctionHighlightedPressed"
      onclick="this.blur();"
      >
      {{ FuncButtonCaption }}
    </b-button>

    <b-button
      :pressed="true"
      variant="outline-secondary"
      class="btnFunction btnFunctionHighlightedPressed"
      onclick="this.blur();"
      >
      <b-spinner small type="grow" label="Spinning" class="btnIconLeft mb-1"></b-spinner>
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
