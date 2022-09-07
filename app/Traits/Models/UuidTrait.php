<?php

namespace App\Traits\Models;

use Illuminate\Support\Str;

trait UuidTrait
{
    /**
     * Get the value indicating whether the IDs are incrementing.
     *
     * @return bool
     */
    public function getIncrementing()
    {
        return false;
    }

    /**
     * Get the auto-incrementing key type.
     *
     * @return string
     */
    public function getKeyType()
    {
        return 'string';
    }

    /**
     * Setup model event observers
     *
     * @return void
     */
    protected static function boot()
    {
        parent::boot();

        // Creating observer: Automatically add primary key value when creating data
        static::creating(function ($model) {
            $model->{$model->getKeyName()} = (string) Str::uuid();
        });
    }
}