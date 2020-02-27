<docs>

<h3>Text Field</h3>
<p>For general use, and can be used freely in a group along with row elements.</p>

```js
<template>
<b-container class="containsRowItems" fluid>
  <b-row>
    <b-col>
      <b-input-group prepend="Text Field">
        <b-form-input class="form-control" type="text" placeholder="Text Field"></b-form-input>
      </b-input-group>
    </b-col>
    <b-col>
    </b-col>
  </b-row>
  <b-row>
    <b-col>
      <b-input-group class="disabled" prepend="Text Field">
        <b-form-input class="form-control" type="text" placeholder="Disabled Text Field" disabled></b-form-input>
      </b-input-group>
    </b-col>
    <b-col>
    </b-col>
  </b-row>
</b-container>

</template>
<script>
  export default {
}
</script>
```


<h3>Search Box</h3>
<p>A highlighted text field specifically designed for search functionality. Supports a clear icon upon typing, and is often paired with a group Filtering options.</p>

```js
<template>
  <b-container class="containsRowItems" fluid>
    <b-row>
      <b-col>
       <b-input-group class="prependIcon">
          <template v-slot:prepend>
            <b-input-group-text >
              <i class="iconSearch far text-dark"></i>
            </b-input-group-text>
          </template>
          <b-form-input type="search" name="focus" required class="searchBox form-control" placeholder="Search for Users, Clients, or Agents . . .">
          </b-form-input>
        </b-input-group>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>

</template>
<script>
export default {

}
</script>
```


<h3>Text Area</h3>
<p>Used when a large block of text needs to be inputted, for example to add a note.</p>

```js
<template>
<b-container class="containsRowItems" fluid>
  <b-row>
    <b-col>
      <b-input-group prepend="Text Field">
        <b-form-textarea no-resize class="form-control" type="text" placeholder="Text Area" rows="4" ></b-form-textarea>
      </b-input-group>
    </b-col>
    <b-col cols="4"></b-col>
  </b-row>
  <b-row>
    <b-col>
      <b-input-group prepend="Text Field">
        <b-form-textarea no-resize class="form-control" type="text" placeholder="Text Area" rows="3" disabled>
        </b-form-textarea>
      </b-input-group>
    </b-col>
    <b-col cols="4"></b-col>
  </b-row>
</b-container>

</template>
<script>
  export default {
}
</script>
```

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
