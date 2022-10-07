<?php

namespace App\Http\Resources\User;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\User\PlayedAppResource;
use App\Http\Resources\App\NotificationResource;
use App\Http\Resources\App\AppWithScoreResource;


class UserAppResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'newList' => AppWithScoreResource::collection($this[0]),
            'recordList' => PlayedAppResource::collection($this[1]),
            'notifications' => NotificationResource::collection($this[2])
        ];
    }
}
