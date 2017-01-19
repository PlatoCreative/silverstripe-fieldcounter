<?php

namespace FieldCounter;

use SilverStripe\Admin\LeftAndMainExtension;
use SilverStripe\Forms\TextField;
use SilverStripe\View\Requirements;

class FieldCounterCMSExtension extends LeftAndMainExtension
{

    public function init()
    {
        parent::init();

        Requirements::css($this->ModuleBase() . '/css/counter.css');

        Requirements::javascript($this->ModuleBase() . '/javascript/counter.js');
    }

    private function ModuleBase()
    {
        return basename(dirname(dirname(__FILE__)));
    }
}
