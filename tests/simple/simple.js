t`Hello ${world}`

t`Place your order`

t`This text doesn't have any translation`

t`${itemFound} items found!`

t`Please make the transfer of ${grandTotal} to the following account within ${time} to complete your order`

t`This ${text} has ${wrong} quasis`

const awesomeNumber = 1 + '2'

function anotherFunc() {
  return true
}

anotherFunc`this text wouldn't be translated ${text}`

const anSequenceExpression = (0, 'awesome')
const anotherSequenceExpression = (0, 777, 'anotherSequenceExpression')
const anotherSequenceExpressionWithTagged = (0, 777, t`Place your order`)
