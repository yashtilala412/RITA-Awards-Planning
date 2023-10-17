UPDATE awards
SET award_name = '{{components.dropdown2.value}}',
    question = '{{components.textarea2.value}}',
    minimum_character = {{components.textinput2.value}}
 WHERE
 question_id={{variables.ques_id}};