<docs>

```jsx noeditor
<div>

  <b-alert fade show dismissible variant="info" class="customAlert alertInfo">
    <h5 class="alert-heading">Under construction!
      <i class="p-1 pt-2 mb-1 fal fa-xs fa-exclamation-triangle text-info align-middle"></i>
    </h5>
    <hr/>
    <p class="mb-0">Many components in this library are <span class="font-weight-bolder">missing or are actively under construction, </span>
    and this page has <span class="font-weight-bolder">not yet been cross-browser or platform tested.</span> Look for this icon <i title="Under construction!" class="p-1 fal fa-sm fa-exclamation-triangle text-info align-middle"></i> next to components that are notably incomplete. If you find any inconsistencies, please Slack or Email Foster. Thank you for your patience!
	</p>
  </b-alert>

</div>

<div class="pr-5 pl-4 pt-1">
  <h3>Hello!</h3>
  <div class="pr-4 pl-4 mb-4 text-justify">
    <p class="mb-3">
      Welcome to the official Triton UI Component Library. Included below is an interactive visual reference and guide to all Triton UI elements.
    </p>
  </div>

  <h3>Libraries and Dependencies</h3>
  <div class="pr-4 pl-4 mb-4 text-justify">
    <p class="mb-3">
      All components are built with <a class="text-info underline" href="https://vuejs.org/" target="_blank">Vue.js</a>, using <a class="text-info underline" href="https://bootstrap-vue.js.org/" target="_blank">BootstrapVue</a>, some custom CSS, and a small amount of Javascript/jQuery (primarily to illustrate specific interaction examples). A few components use additional libraries.
    </p>
    <p class="mb-3">
      <a class="text-info underline" href="https://getbootstrap.com/docs/4.3/getting-started/introduction/" target="_blank">Bootstrap 4.3</a><br/>
      <a class="text-info underline" href="https://fontawesome.com/" target="_blank">Font Awesome 5.10.2</a><br/>
      <a class="text-info underline" href="http://jquery.com" target="_blank">jQuery</a><br/>
      <a class="text-info underline" href="https://popper.js.org/" target="_blank">Popper.js</a><br/>
      <a class="text-info underline" href="https://api.jqueryui.com/sortable/" target="_blank">jQuery UI</a><br/>
      <a class="text-info underline" href="https://fonts.google.com/" target="_blank">Google Fonts</a>
    </p>
    <p class="mb-3">
    This website is built and maintained with the documentation tool
    <a class="text-info underline" href="https://vue-styleguidist.github.io/" target="_blank">Vue Styleguidist</a>.
    </p>
  </div>

  <h3>Browser Compatibility</h3>
  <div class="pr-4 pl-4 mb-4 text-justify">
  <b-table-simple small fixed bordered class="mb-3">
    <b-thead head-variant="dark">
      <b-tr>
        <b-th colspan="2" class="text-center">Chrome</b-th>
        <b-th colspan="2" class="text-center">Edge</b-th>
        <b-th colspan="2" class="text-center">Firefox</b-th>
        <b-th colspan="2" class="text-center">IE</b-th>
        <b-th colspan="2" class="text-center">Opera</b-th>
        <b-th colspan="2" class="text-center">Safari</b-th>
      </b-tr>
    </b-thead>
    <b-tbody>
      <b-tr>
        <b-td id="PopoverChrome" for="Chrome" colspan="2" class="bg-confirm text-center text-white pl-2"><i class="iconConfirm mr-1"></i>
          <b-popover
            triggers="hover blur"
            placement="bottom"
            variant="confirm"
            target="PopoverChrome"
           >
            Currently being used for testing, and is fully compatible.
          </b-popover>
        </b-td>
        <b-td id="PopoverEdge" for="Edge" colspan="2" class="bg-mediumdark text-center text-white pl-2"><i class="iconQuestion mr-1"></i>
          <b-popover
            triggers="hover blur"
            placement="bottom"
            variant="mediumdark"
            target="PopoverEdge"
           >
            Currently untested. <br/>Future support planned.
          </b-popover>
        </b-td>
        <b-td id="PopoverFirefox" for="Firefox" colspan="2" class="bg-mediumdark text-center text-white pl-2"><i class="iconQuestion mr-1"></i>
          <b-popover
            triggers="hover blur"
            placement="bottom"
            variant="mediumdark"
            target="PopoverFirefox"
           >
            Currently untested. <br/>Future support planned.
          </b-popover>
        </b-td>
        <b-td id="PopoverIE" for="IE" colspan="2" class="bg-warning text-center text-white pl-2"><i class="iconRemove mr-1"></i>
          <b-popover
            triggers="hover blur"
            placement="bottom"
            variant="warning"
            target="PopoverIE"
           >
            Currently untested. <br/>Limited future support is reluctantly planned.
          </b-popover>
        </b-td>
        <b-td id="PopoverOpera" for="Opera" colspan="2" class="bg-mediumdark text-center text-white pl-2"><i class="iconQuestion mr-1"></i>
          <b-popover
            triggers="hover blur"
            placement="bottom"
            variant="mediumdark"
            target="PopoverOpera"
           >
            Currently untested. <br/>Future support planned.
          </b-popover>
        </b-td>
        <b-td id="PopoverSafari" for="Safari" colspan="2" class="bg-secondary text-center text-white pl-2"><i class="iconExclamation mr-1"></i>
          <b-popover
            triggers="hover blur"
            placement="bottom"
            variant="secondary"
            target="PopoverSafari"
           >
            Various major bugs identified.<br/>Fixes and future support planned.
          </b-popover>
        </b-td>
      </b-tr>
    </b-tbody>
  </b-table-simple>
  </div>

  <h3>Responsive</h3>
  <div class="pr-4 pl-4 mb-4 text-justify">
  <p class="mb-3">
  The Triton UI Component Library components are <b>not</b> currently designed and tested for mobile or tablet use. However, many of these components are inherently responsive, but full compatibility testing is a long term goal.
  </p>
  </div>

  <h3>Design System</h3>
  <div class="pr-4 pl-4 mb-4 text-justify">
  <p class="mb-3">
  This design system is based on the consistent use of open <i title="Under construction!" class="p-1 fal fa-sm fa-heart text-info align-middle"></i> and closed <i title="Under construction!" class="p-1 fas fa-sm fa-heart text-info align-middle"></i> styles. In every case, elements that have an open stroked style are interactive in some manner. Elements that are closed indicate a currently-hovering state, an actively selected item, or in some cases a disabled element.
  </p>
  <p class="mb-3">
  Below is a link to a design resource and library for internal reference. It contains many in-progress and unapproved designs, and should be used primarily as reference
  </p>
      <b-button
        :pressed="false"
        variant="outline-primaryfade"
        class="btnNavigation btnStandard"
        onclick="this.blur();"
        href="../../#/Design%20Reference%20Files"
        >
          <i></i>
          <div class="btnText">Design Reference Files</div>
          <i class="iconChevron btnIconRight"></i>
      </b-button>
  <p class="mb-3">

  </p>
  </div>

  <h3>WCAG 2.1 Compliance</h3>
  <div class="pr-4 pl-4 mb-4 text-justify">
  <p class="mb-3">
  Details coming soon.
  <br/>
  <br/>
  <b-img src="https://www.w3.org/WAI/WCAG21/wcag2.1A-blue-v.png" fluid class="w-25 d-flex"></b-img>
  <br/>
  </p>
  <p class="mb-3">

  </p>
  </div>

  <h3>Versions & Github</h3>
  <div class="pr-4 pl-4 mb-4 text-justify">
  <p class="mb-3">
    This tool is currently in development.<br/>
    <strong class="text-dark">v0.9.2.5</strong> - last updated on December 10th 2019.<br/><br/>
    <a class="text-info underline" href="https://github.com/fosterdouglas/triton-ui-library-dev" target="_blank">Github Development Repo</a><br/>
    <a class="text-info underline" href="https://github.com/fosterdouglas/triton-ui-component-library" target="_blank">Github Pages Deployment Repo</a><br/>
  </p>

  </div>

<br/>
<hr/>
</div>
```

</docs>
