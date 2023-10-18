
function calculate_balance(data){
    let expense = 0;
    let revenue = 0 ;
    let gift = 0;
    let card = 0;

    data.forEach(element => {
        const key = element.type
        switch (key) {
            case 'despesa':
                expense += Number(element.amount)
                break;
            case 'receita':
                revenue += Number(element.amount)
                break;
            case 'presente':
                gift += Number(element.amount)
                break;
            case 'cartão':
                card += Number(element.amount)
                break;
        }
    });

    let object_balance = {}

    object_balance.expense = (card + expense);
    object_balance.revenue = (revenue + gift)

    if( object_balance.revenue >= object_balance.expense){

        object_balance.balance =  + (object_balance.revenue - object_balance.expense)
    }else{
        object_balance.balance =  - (object_balance.expense - object_balance.revenue)
    }

    return object_balance
}
module.exports = calculate_balance