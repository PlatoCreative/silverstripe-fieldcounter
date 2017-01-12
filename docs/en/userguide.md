To add the field counter to a Silverstripe field in the CMS you need to add:
```php
TextField::('myfield')->setAttribute('fieldcounter', 140);
```
If you require different limits change the 140.

Note: Adding this to a TextareaField prevents new lines.
