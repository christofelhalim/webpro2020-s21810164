// EXERCISE 02
// 1.STRING DAN ARRAY
        let account = {
            name: "Stephen",
            expenses: [],
        
            addExpense(description,amount){
                account.expenses.push({
                    description: description,
                    amount: amount
                });
            },
            getAccountSummary(){
                let totalExpenses = 0
                account.expenses.forEach(function(expenses){
                totalExpenses = totalExpenses + expenses.amount
                });
                return totalExpenses;
            }
        }
        account.addExpense('Beli Bola', 300000);
        account.addExpense('Beli Jersey', 250000);
        console.log("Total Pengeluaran" + " " + account.name + " adalah"+" " + account.getAccountSummary())