const $buttons = $('button');
const $tabPanels = $('[role=tabpanel]');

function handleClick(event) {
    // hide all tab panels
    $tabPanels.toArray().forEach((e) => $(e).hide());
    // mark all tabs as unselected
    $buttons.toArray().forEach((e) => $(e).attr('aria-selected', false));
    // mark the clicked tab as selected
    $buttons.toArray().forEach((e) => {
        if (event.currentTarget.id === $(e).attr('id')) {
            $(e).attr('aria-selected', true);
        }
    });
    // show the corresponding tab panels when the tab is clicked
    $tabPanels.toArray().forEach((e) => {
        const $label = $(e).attr('aria-labelledby');

        if (event.currentTarget.id === $label) {
            $(e).show();
        }
    });
}

$buttons.toArray().forEach((element) => {
    $(element).on('click', handleClick);
});