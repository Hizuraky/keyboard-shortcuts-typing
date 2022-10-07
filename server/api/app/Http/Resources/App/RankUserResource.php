<?php

namespace App\Http\Resources\App;

use Illuminate\Http\Resources\Json\JsonResource;

class RankUserResource extends JsonResource
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
            'id' => $this->resource->user->id,
            'name' => $this->resource->user->name,
            'icon' => $this->resource->user->icon,
            'title' => [
                "id" => $this->resource->user->title->id,
                "name" => $this->resource->user->title->name,
                "url" => $this->resource->user->title->url
            ],
            'score' => $this->score,
        ];
    }
}
