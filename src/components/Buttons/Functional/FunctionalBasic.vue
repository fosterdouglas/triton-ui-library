<docs>

```jsx noeditor
<div>
<p class="ml-n3 w-75">Fuctional buttons are used to initiate an action by the user. They typically "do something" as opposed to the <a class="text-info" href="../../../#/Buttons/AppNavigation">App Navigation</a> buttons which "go somewhere."
</p>
<br/>
</div>
```

<h3>Standard</h3>
<p>The primary button for all of the applications functions. As an example, use this for uploading files, adding users, or assigning new packages. Any low-level functions that the user needs to do to utilize the platform's purpose.</p>

```js
<template>
  <div>

    <b-button
      :pressed="false"
      variant="outline-darkfade"
      class="btnFunction btnFunctionStandard"
      onclick="this.blur();"
      >
        <i></i>
        <div class="btnText">{{ FuncButtonCaption }}</div>
        <i></i>
    </b-button>

    <b-button
      :pressed="false"
      variant="outline-darkfade"
      class="btnFunction btnFunctionStandard"
      onclick="this.blur();"
      >
        <i class="iconFile btnIconLeft"></i>
        <div class="btnText">{{ FuncButtonCaption }}</div>
        <i></i>
    </b-button>

    <b-button
      :pressed="true"
      variant="outline-darkfade"
      class="btnFunction btnFunctionPressed"
      onclick="this.blur();"
      >
        <i></i>
        <div class="btnText">{{ FuncButtonCaption }}</div>
        <i></i>
    </b-button>

    <b-button
      :pressed="true"
      variant="outline-darkfade"
      class="btnFunction btnFunctionPressed"
      onclick="this.blur();"
      >
      <b-spinner small type="grow" label="Spinning" class="btnIconLeft"></b-spinner>
      <i></i>
      <div class="btnText">{{ FuncButtonCaption }}</div>
      <i></i>
    </b-button>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        FuncButtonCaption: 'Sample Button'
      }
    }
  }
</script>
```

</docs>
