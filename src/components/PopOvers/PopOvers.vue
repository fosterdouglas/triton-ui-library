<docs>

```jsx noeditor

<div>

  <b-alert fade show dismissible variant="info" class="customAlert alertInfo">
    <h5 class="alert-heading">Page Task List
      <i class="p-1 pt-2 mb-1 fal fa-xs fa-exclamation-triangle text-info align-middle"></i>
    </h5>
    <hr/>
      <b-ul>
        <b-li class="alertListItem">- Fix DELETE/ADD buttons to properly dismiss popover</b-li>
        <b-li class="alertListItem">- BROKEN: not functioning after build, only locally</b-li>
      </b-ul>
  </b-alert>

</div>
```

<h3>Decision Confirmation</h3>
<p></p>

```js
<div class="row" style="height: 150px;"></div>

<div class="row">

  <div class="col-3"></div>

  <div class="col-1">
    <b-button id="popover-delete" class="btn badge cursorDefault">
      <i class="fal fa-lg fa-window-close icon-hover text-warning info"></i>
    </button>

    <b-popover show ref="popover" triggers="click blur" placement="top" target="popover-delete" title="Permanently delete this?">
      <div id="delete-button" role="button" @click="onClose" class="btn btn-outline-warningfade btnWarning shadow-sm text-danger border-danger rounded-0 m-2 pl-3 pr-3 pt-2 pb-2 pointer">DELETE<i class="far fa-ban btnIconRight"></i></div>
    </b-popover>
  </div>

  <div class="col-4"></div>

  <div class="col-1">
    <button id="popover-confirm" class="btn badge cursorDefault">
      <i class="fal fa-lg fa-check-square icon-hover text-success info"></i>
    </button>

    <b-popover show triggers="click blur" placement="top" target="popover-confirm" title="Confirm?">
      <div id="confirm-button" role="button" class="btn btn-outline-confirmfade btnConfirm shadow-sm text-confirm border-confirm rounded-0 m-2 pl-3 pr-3 pt-2 pb-2 pointer">ADD<i class="far fa-check btnIconRight"></i></div>
    </b-popover>
  </div>

</div>

```

</docs>
