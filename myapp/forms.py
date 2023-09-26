from django import forms

class Signupform(forms.Form):
    full_name = forms.CharField(max_length=20)
    email = forms.EmailField()
    username = forms.CharField(max_length=50)
    supplier_status = forms.BooleanField(widget=forms.CheckboxInput(attrs={'id': 'supplier_status'})) 
    tin = forms.CharField(max_length=100)
    vat = forms.CharField(max_length=100)
    trade = forms.CharField(max_length=100)
    tin_file = forms.FileField() 
    vat_file = forms.FileField()
    trade_file = forms.FileField()
