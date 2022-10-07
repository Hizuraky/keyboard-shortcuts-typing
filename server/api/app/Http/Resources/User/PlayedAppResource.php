<?php

namespace App\Http\Resources\User;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\App\QuestionResource;

class PlayedAppResource extends JsonResource
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
            'id' => $this->resource->app->id,
            'name' => $this->resource->app->name,
            'icon' => $this->resource->app->icon,
            'bestScore' => $this->score,
            'questions' => QuestionResource::collection($this->resource->app->questions),
            'challenger' => $this->resource->app->scores,
        ];
    }
}
