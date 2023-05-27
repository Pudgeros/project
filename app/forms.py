from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SelectField, SubmitField
from wtforms.validators import DataRequired, Length, Optional

from .models import Category


def get_categories():
    categories = Category.query.all()
    return [(category.id, category.title) for category in categories]


class NewsForm(FlaskForm):
    title = StringField('Название', validators=[DataRequired(message='Поле не доложно быть пустым!'), Length(max=255, message='Максимум 255 символов!')])
    text = TextAreaField('Текст', validators=[DataRequired(message='Поле не доложно быть пустым!')])
    category = SelectField('Выберите категорию', choices=get_categories())
    submit_btn = SubmitField('Принять')