package com.servy.user.service

import com.servy.user.DTO.SurveyListResponseVo
import com.servy.user.DTO.SurveyRequestDto
import com.servy.user.DTO.SurveyResponseVo
import org.springframework.data.domain.Pageable

interface SurveyService {
    fun getSurveys(pageable: Pageable): SurveyListResponseVo

    fun getSurvey(id: Int): SurveyResponseVo

    fun save(surveyRequestDto: SurveyRequestDto)
}