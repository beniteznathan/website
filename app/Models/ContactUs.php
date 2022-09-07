<?php

namespace App\Models;

use App\Traits\Models\UuidTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactUs extends Model
{
    use HasFactory,
        UuidTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    const SERVICES = [
        'WEB_DESIGN' => 'WEB_DESIGN',
        'CONTENT_MANAGEMENT' => 'CONTENT_MANAGEMENT',
        'MAINTENANCE' => 'MAINTENANCE',
        'OTHER' => 'OTHER',
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'service',
        'message'
    ];
}
