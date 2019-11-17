<docs>

```jsx noeditor

<div>

  <b-alert fade show dismissible variant="info" class="customAlert alertInfo">
    <h5 class="alert-heading">Foster's Task List
      <i class="p-1 pt-2 mb-1 fal fa-xs fa-exclamation-triangle text-info align-middle"></i>
    </h5>
    <hr/>
      <ul>
        <li class="alertListItem">- <del>Fix DELETE/ADD buttons to properly dismiss popover</del> <i class="iconConfirm"></i></li>
        <li class="alertListItem">- <del>BROKEN: not functioning after build, only locally</del> <i class="iconConfirm"></i></li>
        <li class="alertListItem">- Update JS to properly unfocus icon button after dismiss click</li>
        <li class="alertListItem">- Move info tooltip from Icons page to here</li>
        <li class="alertListItem">- Distribute components into separate files</li>
      </ul>
  </b-alert>

</div>
```

<h3>Click Enabled</h3>
<p></p>

```js
<template>
  <div class="row" style="margin-top:145px;">
    <div style="width: 150px;"></div>

    <div>
        <b-button
          id="PopoverDeleteBtn"
          :pressed="false"
          variant="outline-warningfade"
          class="btnSmall cursorDefault text-warning"
          @click="showDelete = !showDelete"
         >
          <i class="iconRemove iconBorderStd"></i>
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
            <i class="iconRemove   btnIconRight"></i>
          </b-button>
      </b-popover>
    </div>


    <div style="width: 200px;"></div>

    <div>
        <b-button
          id="PopoverAddBtn"
          :pressed="false"
          variant="outline-confirmfade"
          class="btnSmall cursorDefault text-confirm"
          @click="showAdd = !showAdd"
         >
          <i class="iconConfirm iconBorderStd"></i>
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
            <i class="iconConfirm   btnIconRight"></i>
          </b-button>
      </b-popover>
    </div>

  </div>

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
  <div>

        <b-button
          id="PopoverHover"
          :pressed="false"
          variant="outline"
          class="cursorDefault text-dark"
          @hover="showHover = !showHover"
         >
          <i class="iconQuestion iconHover fa-lg"></i>
        </b-button>

      <b-popover
        triggers="hover blur"
        placement="right"
        target="PopoverHover"
        :show.sync="showHover"
       >
        Here is some content.
      </b-popover>


  </div>
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
