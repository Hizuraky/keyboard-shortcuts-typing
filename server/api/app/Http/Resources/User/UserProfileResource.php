<?php

namespace App\Http\Resources\User;

use Illuminate\Http\Resources\Json\JsonResource;

class UserProfileResource extends JsonResource
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
            "id" => $this->id,
            "name" => $this->name,
            "icon" => $this->icon,
            "email" => "",
            "level" => $this->level,
            "level_point"=> $this->level_point,
            "play_time" => $this->play_time,
            "clear_times" => $this->clear_times,
            "first" => $this->resource->userRanking->first,
            "second" => $this->resource->userRanking->second,
            "third" => $this->resource->userRanking->third,
            "topTen" => $this->resource->userRanking->top_ten,
            'title' => [
                'id' => $this->resource->title->id,
                'name' => $this->resource->title->name,
                'url' => $this->resource->title->url,
            ],
            'titles' => TitleUserResource::collection($this->resource->titleUsers),
        ];
    }
}
