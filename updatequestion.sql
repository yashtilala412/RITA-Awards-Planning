UPDATE awards
SET award_name = '{{components.dropdown1.value}}',
    question = '{{components.textarea1.value}}',
    minimum_character = {{components.textinput1.value}}
 WHERE
 question_id={{variables.ques_id}};