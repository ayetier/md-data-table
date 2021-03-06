export const mdTablePaginationTemplate = `
<div class="page-select" ng-if="$pagination.showPageSelect()">
  <div class="label">{{$pagination.label.page}}</div>

  <md-select virtual-page-select total="{{$pagination.pages()}}" class="md-table-select" ng-model="$pagination.page" md-container-class="md-pagination-select" ng-change="$pagination.onPaginationChange()" ng-disabled="$pagination.disabled" aria-label="Page">
    <md-content>
      <md-option ng-repeat="page in $pageSelect.pages" ng-value="page">{{page}}</md-option>
    </md-content>
  </md-select>
</div>

<div class="limit-select" ng-if="$pagination.limitOptions">
  <div class="label">{{$pagination.label.rowsPerPage}}</div>

  <md-select class="md-table-select" ng-model="$pagination.limit" md-container-class="md-pagination-select" ng-disabled="$pagination.disabled" aria-label="Rows" placeholder="{{ $pagination.limitOptions[0] }}">
    <md-option ng-repeat="option in $pagination.limitOptions" ng-value="option.value ? $pagination.eval(option.value) : option">{{::option.label ? option.label : option}}</md-option>
  </md-select>
</div>

<div class="buttons">
  <div class="label">{{$pagination.min()}} - {{$pagination.max()}} {{$pagination.label.of}} {{$pagination.total}}</div>

  <md-button class="md-icon-button" type="button" ng-if="$pagination.showBoundaryLinks()" ng-click="$pagination.first()" ng-disabled="$pagination.disabled || !$pagination.hasPrevious()" aria-label="First">
    <md-icon md-svg-icon="navigate-first.svg"></md-icon>
  </md-button>

  <md-button class="md-icon-button" type="button" ng-click="$pagination.previous()" ng-disabled="$pagination.disabled || !$pagination.hasPrevious()" aria-label="Previous">
    <md-icon md-svg-icon="navigate-before.svg"></md-icon>
  </md-button>

  <md-button class="md-icon-button" type="button" ng-click="$pagination.next()" ng-disabled="$pagination.disabled || !$pagination.hasNext()" aria-label="Next">
    <md-icon md-svg-icon="navigate-next.svg"></md-icon>
  </md-button>

  <md-button class="md-icon-button" type="button" ng-if="$pagination.showBoundaryLinks()" ng-click="$pagination.last()" ng-disabled="$pagination.disabled || !$pagination.hasNext()" aria-label="Last">
    <md-icon md-svg-icon="navigate-last.svg"></md-icon>
  </md-button>
</div>
`;