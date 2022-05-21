class ClientPage{
    get createModalPageButton() {return $('button.clients-add-user-dialog')};
    get firstClientRow() {return $('table.crm-navigator-tble tbody tr td span')};

    clickOnAddclientbutton(){
        this.createModalPageButton.click();
    }

    clickOnFirstRow(){
        this.firstClientRow.click();
    }
}

module.exports = new ClientPage