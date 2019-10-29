<docs>

```jsx noeditor

<div>

  <b-alert fade show dismissible variant="info" class="customAlert alertInfo">
    <h5 class="alert-heading">Page Task List
      <i class="p-1 pt-2 mb-1 fal fa-xs fa-exclamation-triangle text-info align-middle"></i>
    </h5>
    <hr/>
      <b-ul>
        <b-li class="alertListItem">- BROKEN: Update lightbox for Vue after transition</b-li>
      </b-ul>
  </b-alert>

</div>
```
<h3>Lightbox
<i class="p-1 mb-1 fal fa-xs fa-exclamation-triangle text-info bg-white align-middle"></i>
</h3>


```js


<button type="button" class="btn btn-func text-dark shadow-sm border-dark rounded-max m-2 pl-3 pr-3" data-toggle="modal" data-target="#exampleModalCenter">
  Press Me!
</button>


<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header align-items-center">
        <h5 class="modal-title ml-2" id="exampleModalCenterTitle">Hello World!</h5>
        <button type="button" class="close-btn btn" data-dismiss="modal" aria-label="Close">
          <i class="icon-hover fal fa-lg fa-window-close text-dark align-middle pointer"></i>
        </button>
      </div>
      <div class="modal-body text-center">
        <img class="img-fluid" src="http://sandcastle.co/cdn/ebydesign/triton/hello-world.png" />
      </div>
    </div>
  </div>
</div>


```

</docs>
