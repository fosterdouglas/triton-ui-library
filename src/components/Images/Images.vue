<docs>

<h3>Inline</h3>


```js

<div class="p-3 d-inline-flex">
  <img class="img-fluid" src="http://sandcastle.co/cdn/ebydesign/triton/hello-world.png" />
</div>

```

<h3>Thumbnail</h3>


```js

<div class="btn border-dark p-3 text-center">
  <div class="center-cropped" style="backgroundImage: url(http://sandcastle.co/cdn/ebydesign/triton/hello-world.png)">
    <img class="img-fluid" src="http://sandcastle.co/cdn/ebydesign/triton/hello-world.png" />
  </div>
</div>

```

<h3>Modal</h3>


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


<h3>Inline Modal</h3>


```js


<button type="button" class="btn btn-outline-light border-dark shadow-sm p-3 text-center" data-toggle="modal" data-target="#exampleModalCenter">
  <img class="img-fluid" src="http://sandcastle.co/cdn/ebydesign/triton/hello-world.png" />
</button>


{/* Modal code declared inside of "Modal" component example above */}


```


<h3>Thumbnail Modal</h3>


```js

<button type="button" class="btn btn-outline-light border-dark shadow-sm p-3 text-center" data-toggle="modal" data-target="#exampleModalCenter">
  <div class="center-cropped" style={{backgroundImage: "url(" + "http://sandcastle.co/cdn/ebydesign/triton/hello-world.png" + ")"}}>
    <img class="img-fluid" src="http://sandcastle.co/cdn/ebydesign/triton/hello-world.png" />
  </div>
</button>


{/* Modal code declared inside of "Modal" component example above */}

```

</docs>
