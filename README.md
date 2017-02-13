# Silverstripe FieldCounter
Shows a field counter on specified fields in the SilverStripe CMS

### Usage
To add the field counter to a Silverstripe field in the CMS you need to add:
```php
TextField::('myfield')->setAttribute('data-fieldcounter', 140);
```
If you require different limits change the 140.
Note: Adding this to a TextareaField prevents new lines.

If you want to prevent more text than your limit, use the built in HTML attribute `maxlength` e.g. 
```php
TextField::('myfield')->setAttribute('maxlength', 140);
```

### Install
SilverStripe 3 

`$ composer require plato-creative/silverstripe-fieldcounter:1.*`

SilverStripe 4

`$ composer require plato-creative/silverstripe-fieldcounter:2.*`


### Documentation
See [Docs](https://github.com/PlatoCreative/silverstripe-fieldcounter/blob/master/docs/en)
