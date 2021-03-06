'use strict';
describe("Toggling meta tags", function () {
  var $bannerEl;
  var highlightComponent;

  beforeEach(function () {
    loadFixtures("meta-tags.html")

    highlightComponent = new HighlightComponent;
    highlightComponent.toggleMetaTags();

    $bannerEl = $("#govuk-chrome-toolkit-banner");
  });

  it("shows meta tags with name and content", function () {
    expect($bannerEl.text()).toMatch(/foo/);
  });

  it("doesn't show meta tags that use property instead of name", function () {
    // No particular reason for this, it just doesn't
    expect($bannerEl.text()).not.toMatch(/og:image/);
  });

  it("removes the banner when toggled off", function () {
    highlightComponent.toggleMetaTags();

    expect($bannerEl.parent()).toHaveLength(0);
  });
});
