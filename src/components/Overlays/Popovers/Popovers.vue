<docs>

```jsx noeditor

<div>

  <b-alert fade show dismissible variant="info" class="customAlert alertInfo">
    <h5 class="alert-heading">Foster's Task List
      <i class="p-1 pt-2 mb-1 fal fa-xs fa-exclamation-triangle text-info align-middle"></i>
    </h5>
    <hr/>
      <ul>
        <li class="alertListItem">- Update JS to properly unfocus icon button after dismiss click</li>
        <li class="alertListItem">- Distribute components into separate files</li>
      </ul>
  </b-alert>

</div>
```

<h3>Click-Enabled</h3>
<p></p>

```js
<template>
  <div class="row" style="margin-top:145px;">
    <div style="width: 110px;"></div>

    <div>
        <b-button
          id="PopoverGoBtn"
          :pressed="false"
          variant="outline-primaryfade"
          class="btnSmall cursorDefault text-dark"
          @click="showGo = !showGo"
         >
          <i class="iconArrow iconBorderStd"></i>
        </b-button>

      <b-popover
        triggers="click blur"
        placement="top"
        target="PopoverGoBtn"
        title="Go forward?"
        :show.sync="showGo"
       >
          <b-button
            :pressed="false"
            variant="outline-darkfade"
            class="btnNavigation btnStandard"
            onclick="this.blur();"
            @click="showGo = !showGo"
            >
            <div class="btnText">{{ GoButtonCaption }}</div>
            <i class="iconArrow btnIconRight"></i>
          </b-button>
      </b-popover>
    </div>

    <div style="width: 178px;"></div>

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
            <div class="btnText">{{ AddButtonCaption }}</div>
            <i class="iconConfirm btnIconRight"></i>
          </b-button>
      </b-popover>
    </div>

    <div style="width: 200px;"></div>

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
            <div class="btnText">{{ DeleteButtonCaption }}</div>
            <i class="iconRemove btnIconRight"></i>
          </b-button>
      </b-popover>
    </div>

    <div style="width: 200px;"></div>

    <div>
        <b-button
          id="PopoverEditBtn"
          :pressed="false"
          variant="outline-secondary"
          class="btnSmall btnFeedback cursorDefault"
          @click="showEdit = !showEdit"
         >
          <i class="iconEdited iconBorderStd"></i>
        </b-button>

      <b-popover
        triggers="click blur"
        placement="top"
        target="PopoverEditBtn"
        title="Edit this?"
        :show.sync="showEdit"
       >
          <b-button
            :pressed="false"
            variant="outline-secondary"
            class="btnNavigation btnFeedback"
            onclick="this.blur();"
            @click="showEdit = !showEdit"
            >
            <div class="btnText">{{ EditButtonCaption }}</div>
            <i class="iconEdited btnIconRight"></i>
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
        showGo: true,
        showEdit: true,
        DeleteButtonCaption: 'DELETE',
        AddButtonCaption: 'ADD',
        GoButtonCaption: 'GO',
        EditButtonCaption: 'EDIT',
      }
    }
  }
</script>
```

<h3>Hover-Enabled</h3>
<p>Used for short descriptions or context for an item.</p>

```js
<template>
  <div>

    <b-button
      :pressed="false"
      variant="outline"
      class="cursorDefault"
      @hover="showHover1 = !showHover1"
     >
      <i id="PopoverHover1" class="iconArrow iconHover fa-lg"></i>
      <b-popover
        triggers="hover blur"
        variant="-"
        placement="bottom"
        target="PopoverHover1"
        :show.sync="showHover1"
       >
        Here is some content.
      </b-popover>
    </b-button>

    <b-button
      :pressed="false"
      variant="outline"
      class="cursorDefault"
      @hover="showHover2 = !showHover2"
     >
      <i id="PopoverHover2" class="iconConfirm iconHover text-confirm fa-lg"></i>
      <b-popover
        triggers="hover blur"
        variant="confirm"
        placement="bottom"
        target="PopoverHover2"
        :show.sync="showHover2"
       >
        Here is some content.
      </b-popover>
    </b-button>

    <b-button
      :pressed="false"
      variant="outline"
      class="cursorDefault"
      @hover="showHover4 = !showHover4"
     >
      <i id="PopoverHover4" class="iconRemove iconHover text-warning fa-lg"></i>
      <b-popover
        triggers="hover blur"
        variant="warning"
        placement="bottom"
        target="PopoverHover4"
        :show.sync="showHover4"
       >
        Here is some content.
      </b-popover>
    </b-button>

    <b-button
      :pressed="false"
      variant="outline"
      class="cursorDefault"
      @hover="showHover3 = !showHover3"
     >
      <i id="PopoverHover3" class="iconEdited iconHover text-secondary fa-lg"></i>
      <b-popover
        triggers="hover blur"
        variant="secondary"
        placement="bottom"
        target="PopoverHover3"
        :show.sync="showHover3"
       >
        Here is some content.
      </b-popover>
    </b-button>

    <b-button
      :pressed="false"
      variant="outline"
      class="cursorDefault"
      @hover="showHover5 = !showHover5"
     >
      <i id="PopoverHover5" class="iconQuestion iconHover text-mediumdark fa-lg"></i>
      <b-popover
        triggers="hover blur"
        variant="mediumdark"
        placement="bottom"
        target="PopoverHover5"
        :show.sync="showHover5"
       >
        Here is some content.
      </b-popover>
    </b-button>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        showHover: false
      }
    }
  }
</script>
```

</docs>
