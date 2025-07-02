package com.servy.user.service

import com.servy.user.DTO.SurveyListResponseVo
import com.servy.user.repository.SurveyRepository
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service

@Service
class SurveyServiceImpl(
    private val surveyRepository: SurveyRepository
) : SurveyService {
    override fun getSurveys(pageable: Pageable): Page<SurveyListResponseVo> {

        val surveys = surveyRepository.findAll(pageable)
        return surveys.map { survey -> SurveyListResponseVo(id = survey.id as Int, title = survey.title) }
    }

}