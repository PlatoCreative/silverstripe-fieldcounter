To add the field counter to a Silverstripe field in the CMS you need to add:
```php
TextField::('myfield')->setAttribute('fieldcounter', 140);
```
If you require different limits change the 140.

If you want to prevent more text than your limit, use the built in HTML attribute `maxlength` e.g. 
```php
TextField::('myfield')->setAttribute('maxlength', 140);
```

Note: Adding this to a TextareaField prevents new lines.
