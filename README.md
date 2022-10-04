# online_calculator

Задание: сверстать калькулятор лизинга авто


Требования к калькулятору
Калькулятор должен инициализироваться с указанными значениями по умолчанию;
В каждое поле можно ввести значение как с клавиатуры, так и с помощью ползунка;
При выборе значения с помощью ползунка, все числа должны пересчитываться динамически в процессе движения ползунка, а не только после его остановки;
У каждого поля есть максимальное и минимальное значение — ползунок должен ограничивать пользователя в выборе данных, а при вводе некорректного значения с клавиатуры, оно должно сбрасываться к ближайшему корректному числу (максимуму или минимуму).
Для поля “Стоимость автомобиля” границы: 1 млн.руб. — 6 млн.руб.;
Для поля “Первоначальный взнос” границы: 10% - 60% (здесь ввод происходит именно в процентах от стоимости, а не рублях; рубли - результат расчета от введенной стоимости автомобиля);
Для поля “Срок лизинга” границы: 1 - 60 месяцев;
Формулы расчета для полей:
Процентная ставка = 3.5%
Для поля “Первоначальный взнос”: 
Первоначальный взнос (в процентах) * Стоимость автомобиля
Для поля “Сумма договора лизинга”:
Первоначальный взнос + Срок кредита в месяцах * Ежемесячный платеж
Для поля “Ежемесячный платеж от”:
(Стоимость автомобиля - Первоначальный взнос) * ((Процентная ставка * (1 + Процентная ставка)^Срок кредита в месяцах) / ((1 + Процентная ставка)^Срок кредита в месяцах - 1)) 

const monthPay = (price - initial) * ((0.035 * Math.pow((1 + 0.035), months)) / (Math.pow((1 + 0.035), months) - 1));
По кнопке “Оформить заявку” должен формироваться запрос, который отправляет все данные калькулятора на бэкенд, например, чтобы потом backend мог использовать эти данные для передачи в CRM-систему.
URL для запроса: https://eoj3r7f3r4ef6v4.m.pipedream.net
Метод запроса: POST
Заголовок Content-Type: application/json
Все данные с формы передавать в JSON-формате в теле запроса.
В момент клика по кнопке кнопка должна блокироваться от возможности повторной отправки данных на время выполнения запроса к бэкенду, а внутри кнопки отображаться прелоадер. Инпуты и слайдеры на время отправки должны блокироваться.

----

Task: to set up a car leasing calculator


Calculator Requirements
The calculator should be initialized with the specified default values;
In each field, you can enter a value either from the keyboard or using the slider;
When selecting a value using the slider, all numbers should be recalculated dynamically during the movement of the slider, and not only after it stops;
Each field has a maximum and minimum value — the slider should restrict the user in selecting data, and when entering an incorrect value from the keyboard, it should be reset to the nearest correct number (maximum or minimum).
For the “Cost of the car” field, the boundaries are: 1 million rubles — 6 million rubles;
For the “Initial payment” field, the boundaries are: 10% - 60% (here the input is exactly as a percentage of the cost, not rubles; rubles are the result of calculating the entered cost of the car);
For the “Lease term" field, the boundaries are: 1 - 60 months;
Calculation formulas for fields:
Interest rate = 3.5%
For the “Initial payment” field: 
Initial payment (as a percentage) * The cost of the car
For the “Lease agreement amount” field:
Initial payment + Loan term in months * Monthly payment
For the “Monthly payment from" field:
(The cost of the car is the Initial payment) * ((Interest rate * (1 + Interest rate)^Loan term in months) / ((1 + Interest rate)^Loan term in months - 1)) 

const monthPay = (price - initial) * ((0.035 * Math.pow((1 + 0.035), months)) / (Math.pow((1 + 0.035), months) - 1));
By clicking on the “Apply” button, a request should be generated that sends all the calculator data to the backend, for example, so that the backend can then use this data to transfer to the CRM system.
URL for the request: https://eoj3r7f3r4ef6v4.m.pipedream.net
Request method: POST
Content-Type header: application/json
All data from the form should be transmitted in JSON format in the request body.
At the moment of clicking on the button, the button should be blocked from the possibility of resending data for the duration of the request to the backend, and a preloader should be displayed inside the button. Inputs and sliders should be blocked for the time of sending.
