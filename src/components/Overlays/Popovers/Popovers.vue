<docs>

```jsx noeditor

<div>

  <b-alert fade show dismissible variant="info" class="customAlert alertInfo">
    <h5 class="alert-heading">Page Task List
      <i class="p-1 pt-2 mb-1 fal fa-xs fa-exclamation-triangle text-info align-middle"></i>
    </h5>
    <hr/>
      <b-ul>
        <b-li class="alertListItem">- <del>Fix DELETE/ADD buttons to properly dismiss popover</del> <i class="fas fa-check"></b-li>
        <b-li class="alertListItem">- <del>BROKEN: not functioning after build, only locally</del> <i class="fas fa-check"></b-li>
        <b-li class="alertListItem">- Update JS to properly unfocus icon button after dismiss click</b-li>
        <b-li class="alertListItem">- Move info tooltip from Icons page to here</b-li>
      </b-ul>
  </b-alert>

</div>
```

<h3>Click Enabled</h3>
<p></p>

```js
<template>
  <b-div class="row" style="margin-top:155px;">
    <b-div class="col-2"></b-div>

    <b-div class="col-1">
        <b-button
          id="PopoverDeleteBtn"
          :pressed="true"
          variant="outline"
          class="badge cursorDefault"
          @click="showDelete = !showDelete"
         >
          <i class="fal fa-lg fa-window-close icon-hover text-warning"></i>
        </b-button>

      <b-popover
        triggers="click blur"
        placement="top"
        target="PopoverDeleteBtn"
        title="Permanently delete this?"
        :show.sync="showDelete"
       >
          <b-button
            :pressed="false"
            variant="outline-warningfade"
            class="btnNavigation btnWarning"
            onclick="this.blur();"
            @click="showDelete = !showDelete"
            >
            {{ DeleteButtonCaption }}
            <i class="far fa-ban btnIconRight"></i>
          </b-button>
      </b-popover>
    </b-div>


    <b-div class="col-3"></b-div>

    <b-div class="col-1">
        <b-button
          id="PopoverAddBtn"
          :pressed="true"
          variant="outline"
          class="badge cursorDefault"
          @click="showAdd = !showAdd"
         >
          <i class="fal fa-lg fa-check-square icon-hover text-confirm"></i>
        </b-button>

      <b-popover
        triggers="click blur"
        placement="top"
        target="PopoverAddBtn"
        title="Confirm?"
        :show.sync="showAdd"
       >
          <b-button
            :pressed="false"
            variant="outline-confirmfade"
            class="btnNavigation btnConfirm"
            onclick="this.blur();"
            @click="showAdd = !showAdd"
            >
            {{ AddButtonCaption }}
            <i class="far fa-check btnIconRight"></i>
          </b-button>
      </b-popover>
    </b-div>

  </b-div>

</template>

<script>
  export default {
    data() {
      return {
        showDelete: true,
        showAdd: true,
        DeleteButtonCaption: 'DELETE',
        AddButtonCaption: 'ADD'
      }
    }
  }
</script>
```

<h3>Hover Enabled</h3>
<p>Used for short descriptions or context for an item.</p>

```js
<template>
  <b-div class="row" >

    <b-div class="col-1">
        <b-button
          id="PopoverHover"
          :pressed="false"
          variant="outline"
          class="badge cursorDefault"
          @hover="showHover = !showHover"
         >
          <i class="fal fa-lg fa-question-square icon-hover text-info"></i>
        </b-button>

      <b-popover
        triggers="hover blur"
        placement="right"
        target="PopoverHover"
        :show.sync="showHover"
       >
        Here is some content.
      </b-popover>
    </b-div>

  </b-div>

</template>

<script>
  export default {
    data() {
      return {
        HoverCaption: HOVER,
        showHover: false
      }
    }
  }
</script>
```

</docs>
